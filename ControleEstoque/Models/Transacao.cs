namespace ControleEstoque.Models
{
    public class Transacao
    {
        public int Id {get; set;}
        public string? Descricao { get; set; }
        public DateTime dataTransacao { get; set; }
    }
}