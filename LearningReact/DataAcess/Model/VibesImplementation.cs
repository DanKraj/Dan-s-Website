using System;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LearningReact.Model
{
    public partial class DansWebsiteContext : DbContext
    {
        public void AddVibeCheck(Vibes vibe)
        {
            this.Vibes.Add(vibe);
            this.SaveChanges();
        }
    }
}
