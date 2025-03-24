var builder = WebApplication.CreateBuilder(args);

// Habilitar CORS globalmente
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

// Configuración esencial de servicios
builder.Services.AddControllers(); // Habilita el uso de controladores
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Usar CORS en la aplicación
app.UseCors("AllowAll");

// Configuración de middlewares
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // Habilita las rutas de los controladores

app.Run();
