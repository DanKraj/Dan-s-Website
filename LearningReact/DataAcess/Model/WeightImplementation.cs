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
        public void AddWeight(Weight weight)
        {
            if(weight.DateRecorded is null)
            {
                weight.DateRecorded = DateTime.Now;
            }
            this.Weight.Add(weight);
            this.SaveChanges();
        }

        public IEnumerable<Weight> GetWeight()
        {
            return this.Weight.ToList<Weight>();
        }
    }
}
