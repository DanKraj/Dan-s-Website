﻿using System;
using System.Collections.Generic;

namespace LearningReact.Models
{
    public partial class Vibes
    {
        public string VibeLevel { get; set; }
        public string VibeDetails { get; set; }
        public int Id { get; set; }
        public DateTime? DateRecorded { get; set; }
    }
}
