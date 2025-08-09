import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  step: number = 1;
  nextStep() {
    if (this.step < 4) {
      this.step++;
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  personalInformation = {
    fullName: '',
    email: '',
    position: '',
    phone: '',
    address: '',
    linkedIn: '',
    summary: '',
    github: '',
    portfolio: '',
  };

  workExperiences: {
    jobTitle: string;
    company: string;
    Date: string;
    location: string;
    projectDetails: string;
  }[] = [];

  education = {
    university: '',
    degree: '',
    graduationYear: '',
    location: '',
    projectDetails: '',
  };

  skills: string[] = [];

  resumes = [
    {
      resumeId: 1,
      personalInformation: {
        fullName: 'Ahmed Ali',
        email: 'ahmed@example.com',
        position: 'Frontend Developer',
        phone: '01012345678',
        address: 'Cairo, Egypt',
        linkedIn: 'https://linkedin.com/in/ahmedali',
        summary: 'Frontend developer with 2 years experience.',
        github: 'https://github.com/ahmedali',
        portfolio: 'https://ahmedali.dev',
      },
      workExperiences: [
        {
          jobTitle: 'Frontend Developer',
          company: 'Tech Corp',
          Date: '2022 - Present',
          location: 'Cairo, Egypt',
          projectDetails:
            'Developed responsive web apps using React and Tailwind CSS.',
        },
        {
          jobTitle: 'Web Designer',
          company: 'Design Studio',
          Date: '2020 - 2022',
          location: 'Alexandria, Egypt',
          projectDetails: 'Designed and maintained UI for client websites.',
        },
      ],
      education: {
        university: 'Cairo University',
        degree: 'BSc Computer Science',
        graduationYear: '2019',
        location: 'Cairo, Egypt',
        projectDetails: 'Graduation project on AI-driven web tools.',
      },
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Git', 'REST APIs'],
    },
    {
      resumeId: 2, // <-- عدل هنا ليكون رقم وليس نص
      personalInformation: {
        fullName: 'Ahmed Ali',
        email: 'ahmed@example.com',
        position: 'Frontend Developer',
        phone: '01012345678',
        address: 'Cairo, Egypt',
        linkedIn: 'https://linkedin.com/in/ahmedali',
        summary: 'Frontend developer with 2 years experience.',
        github: 'https://github.com/ahmedali',
        portfolio: 'https://ahmedali.dev',
      },
      workExperiences: [
        {
          jobTitle: 'Frontend Developer',
          company: 'Tech Corp',
          Date: '2022 - Present',
          location: 'Cairo, Egypt',
          projectDetails:
            'Developed responsive web apps using React and Tailwind CSS.',
        },
        {
          jobTitle: 'Web Designer',
          company: 'Design Studio',
          Date: '2020 - 2022',
          location: 'Alexandria, Egypt',
          projectDetails: 'Designed and maintained UI for client websites.',
        },
      ],
      education: {
        university: 'Cairo University',
        degree: 'BSc Computer Science',
        graduationYear: '2019',
        location: 'Cairo, Egypt',
        projectDetails: 'Graduation project on AI-driven web tools.',
      },
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Git', 'REST APIs'],
    },
  ];

  loadResumesFromStorage() {
    const data = localStorage.getItem('resumes');
    if (data) {
      this.resumes = JSON.parse(data).map((r: any, i: number) => ({
        ...r,
        resumeId:
          typeof r.resumeId === 'string' ? Number(r.resumeId) : r.resumeId,
      }));
    }
  }
  getSpecificResume(resumeId: number) {
    const resume = this.resumes.find((r) => r.resumeId === resumeId);
    if (resume) {
      this.personalInformation = { ...resume.personalInformation };
      this.workExperiences = [...resume.workExperiences];
      this.education = { ...resume.education };
      this.skills = [...resume.skills];
    }
  }
  saveResumesToStorage() {
    localStorage.setItem('resumes', JSON.stringify(this.resumes));
  }

  createNewResume() {
    const newResume = {
      resumeId: Date.now(),
      personalInformation: {
        fullName: '',
        email: '',
        position: '',
        phone: '',
        address: '',
        linkedIn: '',
        summary: '',
        github: '',
        portfolio: '',
      },
      workExperiences: [],
      education: {
        university: '',
        degree: '',
        graduationYear: '',
        location: '',
        projectDetails: '',
      },
      skills: [],
    };
    this.resumes.push(newResume);
    this.saveResumesToStorage();
    return newResume.resumeId;
  }

  saveCurrentResume() {
    const currentResumeId = this.resumes[this.resumes.length - 1]?.resumeId;
    const index = this.resumes.findIndex((r) => r.resumeId === currentResumeId);

    if (index !== -1) {
      this.resumes[index] = {
        resumeId: currentResumeId,
        personalInformation: { ...this.personalInformation },
        workExperiences: [...this.workExperiences],
        education: { ...this.education },
        skills: [...this.skills],
      };
      this.saveResumesToStorage();
    }
  }
}
