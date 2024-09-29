namespace ControleEstoque.Models
{
    public class Produto
    {
        public int Id {get; set;}
        public string? Nome {get; set;}
        public string? Descricao {get; set;}
        public int Quantidade { get; set; }
        public float Valor { get; set; }
    }
}