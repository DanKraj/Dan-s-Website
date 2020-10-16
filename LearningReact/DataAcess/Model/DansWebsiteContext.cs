using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LearningReact.Models
{
    public partial class DansWebsiteContext : DbContext
    {
        public DansWebsiteContext()
        {
        }

        public DansWebsiteContext(DbContextOptions<DansWebsiteContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Vibes> Vibes { get; set; }
        public virtual DbSet<Weight> Weight { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-DGEOM0P;Initial Catalog=DansWebsite;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Vibes>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.DateRecorded).HasColumnType("datetime");

                entity.Property(e => e.VibeDetails).IsUnicode(false);

                entity.Property(e => e.VibeLevel).IsUnicode(false);
            });

            modelBuilder.Entity<Weight>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.DateRecorded).HasColumnType("datetime");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
