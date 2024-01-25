
    export interface Job{
        id:                  string
        jobTitle:            string;
        jobDescription:      string;
        jobMoniker:          string;
        ownerName:           string;
        state:               string
        jobSkills:           JobSkill[];
        jobContractTypes:    JobContractType[];
        jobsJobTypes:        JobsJobType[];
        jobsSalaryTypes:     JobsSalaryType[];
        jobLanguagues:       JobLanguague[];
        jobResponsabilities: JobResponsability[];
    }
    
    export interface JobContractType {
        contractTypeName: string;
        contractMoniker:  string;
    }
    
    export interface JobLanguague {
        languegue:        string;
        languegueMoniker: string;
        level:            string;
    }
    
    export interface JobResponsability {
        responsibilityDescription: string;
    }
    
    export interface JobSkill {
        skillName:         string;
        skillMoniker: string;
        level:        number;
    }
    
    export interface JobsJobType {
        jobTypeName:    string;
        jobTypeMoniker: string;
    }
    
    export interface JobsSalaryType {
        salaryTypeName: string;
        salaryMoniker:  string;
        currency:       string;
        maxAmount:      number;
        minAmount:      number;
    }

    export interface JobListItem{
         id: string;
         jobTitle: string;
         jobDescription: string;
         jobSkills:           JobSkill[];
         jobContractTypes:    JobContractType[];
         jobsJobTypes:        JobsJobType[];
         jobsSalaryTypes:     JobsSalaryType[];
         jobLanguagues:       JobLanguague[];
         jobResponsabilities: JobResponsability[];
    }

    export interface JobSugestionsItems {
        jobTitle:    string;
        degreeTrust: number;
    }
    