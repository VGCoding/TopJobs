using ResumeServices.Entities;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
namespace ResumeServices.Repository
{
    public class ResumeRepository : IResumeRepository
    {
        private readonly ResumeDb db;
        public ResumeRepository(ResumeDb database)
        {
            this.db = database;
        }
        public string AddResume(Resume r)
        {
            this.db.Resumes.Add(r);
            db.SaveChanges();
            return "added successfully";
        }

        public List<Resume> AllResumesForParticularJobId(int jobId)
        {
            return this.db.Resumes.Where(y=>y.jobId==jobId).ToList();
        }


        public string JobSeekerRegisteredConfirmation(int applicantId)
        {
            bool has = this.db.Resumes.Any(y => y.applicantId == applicantId);
            if (has ==true)
                return "true";
            return "false";
        }
    }
}
