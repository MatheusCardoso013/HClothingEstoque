using ControleEstoque.Models;
using Microsoft.EntityFrameworkCore;

namespace ControleEstoque.Data
{
    public class AppDbContext: DbContext
    {
        public DbSet<Produto> Produtos {get; set;}
        public DbSet<Transacao> Transacoes {get; set;}

        protected override void OnConfiguring(DbContextOptionsBuilder opt) 
            => opt.UseSqlite("DataSource=app.db;Cache=Shared");
    }
}