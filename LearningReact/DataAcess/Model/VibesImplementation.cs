﻿using System;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LearningReact.Model
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
    }
}
