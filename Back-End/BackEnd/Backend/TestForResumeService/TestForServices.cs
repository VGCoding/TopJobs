using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using Moq;
using ResumeServices.Entities;
using ResumeServices.Services;
using ResumeServices.Repository;
namespace TestForResumeService
{
    internal class TestForServices
    {
        [SetUp]
        public void Setup()
        {

        }
        Resume resume = new Resume()
        {
            applicantId = 1,
            Skills = "python",
            MajorProject = "ai enable camera",
            Experience = 2,
            Achievements = "scholarship",
            jobId = 4,
            Name = "dhawan"
        };
        [Test]
        public void TestForAddResume()
        {
            var mockRepo = new Mock<IResumeRepository>();
            ResumeService resumeService = new ResumeService(mockRepo.Object);
            
            mockRepo.Setup(repo => repo.AddResume(resume)).Returns("added successfully");
            var result = resumeService.AddResume(resume);
            Assert.That(result, Is.EqualTo("added successfully"));
        }
        [Test]
        public void TestForAllResumesForParticularJobId()
        {
            var mockRepo = new Mock<IResumeRepository>();
            ResumeService resumeService = new ResumeService(mockRepo.Object);
            mockRepo.Setup(repo => repo.AllResumesForParticularJobId(1)).Returns(new List<Resume>());
            var result = resumeService.AllResumesForParticularJobId(1);
            Assert.That(result, Is.TypeOf<List<Resume>>());
        }
        [Test]
        public void TestForJobSeekerRegisteredConfirmation()
        {
            var mockRepo = new Mock<IResumeRepository>();
            ResumeService resumeService = new ResumeService(mockRepo.Object);
            mockRepo.Setup(repo => repo.JobSeekerRegisteredConfirmation(3)).Returns("true");
            var result = resumeService.JobSeekerRegisteredConfirmation(3);
            Assert.That(result, Is.EqualTo("true"));
        }
    }
}
