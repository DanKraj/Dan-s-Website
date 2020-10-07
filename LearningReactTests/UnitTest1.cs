using NUnit.Framework;
using LearningReact.Model;
using System;

namespace LearningReactTests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void VibesImplementation_AddVibeCheck_AddsToDb()
        {
            var context = new DansWebsiteContext();

            var newVibe = new Vibes { VibeLevel = "1"};

            

            context.AddVibeCheck(newVibe);
            Assert.Pass();
        }
    }
}