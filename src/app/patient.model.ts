export class Patient 
{
    profileImage: string;
    firstName: string;
  	lastName: string;
  	emailAddress: string;
  	doctorName : string;

    constructor(profileImage: string, firstName: string, lastName: string, emailAddress: string, doctorName: string) 
    {
          this.profileImage = profileImage;
        	this.firstName = firstName;
        	this.lastName = lastName;
        	this.emailAddress = emailAddress;
        	this.doctorName = doctorName;
  	}
}
