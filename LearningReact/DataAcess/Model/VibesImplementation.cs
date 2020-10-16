using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LearningReact.Models
{
    public partial class DansWebsiteContext : DbContext
    {
        public void AddVibeCheck(Vibes vibe)
        {
            if(vibe.DateRecorded is null)
            {
                vibe.DateRecorded = DateTime.Now;
            }
            this.Vibes.Add(vibe);
            this.SaveChanges();
        }

        public IEnumerable<Vibes> GetVibes()
        {
            return this.Vibes.ToList<Vibes>();
        }
    }
}
