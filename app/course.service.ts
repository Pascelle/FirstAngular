
//a service is just a class

export class CourseService {
	getCourses() : string[] {
	//method getCourses //declares the return type, a string array
		return ["Course1","Course2","Course3"];
		//this has to do with having a RESTful API

	}
}

// the point here is that there is no way to get the data from the server.  This task has been delegated to the service.