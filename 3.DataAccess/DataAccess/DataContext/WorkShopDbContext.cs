using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using DataAccess.Entity;

namespace DataAccess.DataContext{
    public class WorkShopDbContext : DbContext
    {
        public DbSet<UserEntity> Users {get;set;}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=WorkShopDataBase.db");
        }
    }
}