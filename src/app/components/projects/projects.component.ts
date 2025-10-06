import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent]
})
export class ProjectsComponent {
  projects = [
    {
      name: "Cart Easy",
      description: "An efficient e-commerce cart management system.",
      link: "https://github.com/The-DigitalAcademy/cart_easy.git",
      github: "https://github.com/The-DigitalAcademy/cart_easy.git",
      image: "https://www.freethink.com/wp-content/uploads/2021/04/future-oceans-runway-show-2.jpg",
      category: "E-commerce",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
      name: "Group Budget Expense",
      description: "A financial management tool for tracking group expenses.",
      link: "https://github.com/The-DigitalAcademy/Group-Budget-Expense.git",
      github: "https://github.com/The-DigitalAcademy/Group-Budget-Expense.git",
      image: "https://i.pinimg.com/736x/5d/9d/d5/5d9dd5e800d3625cebf200d2a1aeb714.jpg",
      category: "Finance",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      name: "Yoni Saloon",
      description: "A salon appointment booking and management system.",
      link: "https://github.com/The-DigitalAcademy/Yoni_Saloon.git",
      github: "https://github.com/The-DigitalAcademy/Yoni_Saloon.git",
      image: "https://i.pinimg.com/736x/b6/fc/37/b6fc3740d0a1e49741d9b077126b1593.jpg",
      category: "Business",
      technologies: ["Angular", "TypeScript", "MySQL"]
    },
    {
      name: "Life's Insurance",
      description: "A digital insurance management system.",
      link: "https://github.com/The-DigitalAcademy/Life-s-insurance.git",
      github: "https://github.com/The-DigitalAcademy/Life-s-insurance.git",
      image: "https://i.pinimg.com/736x/68/92/d4/6892d4fbc0a3dd20ab053ef2333853d3.jpg",
      category: "Insurance",
      technologies: ["Java", "Spring Boot", "PostgreSQL"]
    },
    {
      name: "Group B Gym",
      description: "A gym membership and workout tracking application.",
      link: "https://github.com/The-DigitalAcademy/Group-B_Gym.git",
      github: "https://github.com/The-DigitalAcademy/Group-B_Gym.git",
      image: "https://i.pinimg.com/736x/44/1e/85/441e8559a94328a48d7149fd645eb10b.jpg",
      category: "Fitness",
      technologies: ["React Native", "Firebase", "Node.js"]
    },
    {
      name: "In Need",
      description: "A donation app that connects sponsors with organizations to support meaningful causes.",
      link: "https://github.com/GuguM22/In-need-backend.git",
      github: "https://github.com/GuguM22/In-need-backend.git",
      image: "https://i.pinimg.com/1200x/30/43/e1/3043e1fc388e29007e7ae963e6f5b7cd.jpg",
      category: "Social Impact",
      technologies: ["Vue.js", "Express.js", "MongoDB"]
    }
  ];
}
