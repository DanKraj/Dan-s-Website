using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LearningReact.Model
{
    public partial class DansWebsiteContext : DbContext
    {
        public void AddWeightRecord(Weight weight)
        {
            if (weight.DateRecorded is null)
            {
                weight.DateRecorded = DateTime.Now;
            }
            Weight.Add(weight);
            this.SaveChanges();
        }

        public IEnumerable<Weight> GetWeights()
        {
            return this.Weight.ToList<Weight>();
        }
    }
}
