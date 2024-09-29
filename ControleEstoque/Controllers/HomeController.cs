using ControleEstoque.Data;
using ControleEstoque.Models;
using ControleEstoque.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ControleEstoque.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        //Assincrono
        [HttpGet("/")]
        public async Task<IActionResult> GetAsync([FromServices]AppDbContext context)
        {
            var produtos = await context.Produtos.ToListAsync();
            return Ok(produtos);
        }

        [HttpGet("/transacoes")]
        public async Task<IActionResult> GetTransacoesAsync([FromServices]AppDbContext context)
        {
            var transacoes = await context.Transacoes.ToListAsync();
            return Ok(transacoes);
        }

        [HttpPost("/")]
        public async Task<IActionResult> PostAsync(
            [FromBody] ProdutoViewModel umProduto,
            [FromServices] AppDbContext context)
        {
            var novoProduto = new Produto
            {
                Nome = umProduto.Nome,
                Descricao = umProduto.Descricao,
                Quantidade = umProduto.Quantidade,
                Valor = umProduto.Valor
            };
            await context.Produtos.AddAsync(novoProduto);
            await context.SaveChangesAsync();

            var novaTransacao = new Transacao
            {
                Descricao = $"Postagem de Produto com ID = {novoProduto.Id}",
                dataTransacao = DateTime.Now
            };

            await context.Transacoes.AddAsync(novaTransacao);
            await context.SaveChangesAsync();

            return Created($"/{novoProduto.Nome}", umProduto);
        }

        [HttpPut("/{id:int}")]
        public async Task<IActionResult> PutAsync(
            [FromRoute] int id,
            [FromBody] ProdutoViewModel umProduto,
            [FromServices]AppDbContext context)
        {
            var oProduto = await context.Produtos.FindAsync(id);
            
            if(oProduto is null) return NotFound();

            oProduto.Nome = umProduto.Nome;
            oProduto.Descricao = umProduto.Descricao;
            oProduto.Quantidade = umProduto.Quantidade;
            oProduto.Valor = umProduto.Valor;

            var novaTransacao = new Transacao
            {
                Descricao = $"Produto com ID = {id} editado.",
                dataTransacao = DateTime.Now
            };
            
            await context.Transacoes.AddAsync(novaTransacao);
            await context.SaveChangesAsync();

            return Ok("Produto editado com sucesso!");
        }

        [HttpDelete("/{id:int}")]
        public async Task<IActionResult> DeleteAsync(
            [FromRoute] int id,
            [FromServices] AppDbContext context)
        {
            var oProduto = await context.Produtos.FindAsync(id);

            if (oProduto is null) return NotFound();

            var novaTransacao = new Transacao
            {
                Descricao = $"Produto com ID = {id} deletado!",
                dataTransacao = DateTime.Now
            };

            context.Produtos.Remove(oProduto);
            await context.Transacoes.AddAsync(novaTransacao);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}
