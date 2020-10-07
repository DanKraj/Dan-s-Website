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
            return new List<Vibes>()
            {
                new Vibes()
                {
                    VibeDetails = "good",
                    VibeLevel = "1",
                    DateRecorded = DateTime.Now,
                    Id  = 1
                }
            };
        }

        [HttpPost]
        public void AddVibeCheck([FromBody]Vibes vibe)
        {
            Console.WriteLine("Vibe: " + vibe);
            //Vibes newVibe = vibe.ToObject<Vibes>();
            //DansWebsiteContext context = new DansWebsiteContext();
            //context.AddVibeCheck(newVibe);
        }
    }
}
