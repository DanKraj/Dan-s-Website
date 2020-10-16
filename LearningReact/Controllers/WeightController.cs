using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearningReact.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace LearningReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeightController : ControllerBase
    {
        private readonly ILogger<WeightController> _logger;

        public WeightController(ILogger<WeightController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Weight> GetAllWeights()
        {
            DansWebsiteContext context = new DansWebsiteContext();
            return context.GetWeight();
        }

        [HttpPost]
        public void AddWeight([FromBody]Weight weight)
        {
            DansWebsiteContext context = new DansWebsiteContext();
            context.AddWeight(weight);
        }
    }
}
