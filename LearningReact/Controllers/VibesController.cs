using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearningReact.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LearningReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VibesController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<VibesController> _logger;

        public VibesController(ILogger<VibesController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public void AddVibeCheck(Vibes vibe)
        {
            DansWebsiteContext context = new DansWebsiteContext();
            context.AddVibeCheck(vibe);
        }
    }
}
