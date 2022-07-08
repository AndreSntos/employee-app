using Microsoft.EntityFrameworkCore;

namespace RegisterApi.Models
{
    public class RegisterDbContext : DbContext 
    {
        public RegisterDbContext(DbContextOptions<RegisterDbContext> options): base(options)
        {

        }

        public DbSet<Funcionario> Funcionarios { get; set; }
    }
}
