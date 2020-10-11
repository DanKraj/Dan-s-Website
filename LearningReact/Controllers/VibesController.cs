using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearningReact.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

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

        [HttpGet]
        public IEnumerable<Vibes> GetAllVibes()
        {
            DansWebsiteContext context = new DansWebsiteContext();
            return context.GetVibes();
        }

        [HttpPost]
        public void AddVibeCheck([FromBody]Vibes vibe)
        {
            DansWebsiteContext context = new DansWebsiteContext();
            context.AddVibeCheck(vibe);
        }
    }
}
