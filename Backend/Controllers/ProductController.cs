using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly string _jsonFilePath;

        public ProductsController()
        {
            _jsonFilePath = Path.Combine(Directory.GetCurrentDirectory(), "products.json");
        }

        private async Task<List<Product>> LoadProductsAsync()
        {
            if (!System.IO.File.Exists(_jsonFilePath))
            {
                return new List<Product>();
            }

            var jsonData = await System.IO.File.ReadAllTextAsync(_jsonFilePath);
            var productsWrapper = JsonSerializer.Deserialize<ProductWrapper>(jsonData, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            return productsWrapper?.Products ?? new List<Product>();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            var products = await LoadProductsAsync();

            if (products.Count == 0)
            {
                return NotFound(new { message = "No se encontraron productos." });
            }

            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProductById(int id)
        {
            var products = await LoadProductsAsync();

            var product = products.FirstOrDefault(p => p.Id == id);

            if (product == null)
            {
                return NotFound(new { message = $"Producto con ID {id} no encontrado." });
            }

            return Ok(product);
        }

    }

    public class ProductWrapper
    {
        public List<Product> Products { get; set; } = new List<Product>();
    }
}
