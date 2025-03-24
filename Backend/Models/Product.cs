using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        [Required]
        [Range(0, double.MaxValue)]
        public decimal Price { get; set; }

        [Range(0, 100)]
        public double DiscountPercentage { get; set; }

        [Range(0, 5)]
        public double Rating { get; set; }

        [Range(0, int.MaxValue)]
        public int Stock { get; set; }

        [Required]
        [MaxLength(100)]
        public string Brand { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Category { get; set; } = string.Empty;

        [Required]
        [Url]
        public string Thumbnail { get; set; } = string.Empty;

        public List<string> Images { get; set; } = new List<string>();
    }
}
