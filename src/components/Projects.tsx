import { Link } from 'react-router-dom';
import '../Projects.css';
import lrxs_T from '../assets/thumbnails/lrxs_t.png';
import controller_T from '../assets/thumbnails/controller_t.png';
import karzhyn_T from '../assets/thumbnails/karzhyn_t.png';
import friends_T from '../assets/thumbnails/friendslistv_t.png';
import memory_T from '../assets/thumbnails/memory_t.png';
import caster_T from '../assets/thumbnails/casterwheel.png';
import salad_T from '../assets/thumbnails/salad_t.jpg';
import king_T from '../assets/thumbnails/kingtiger_t.png';
import start_T from '../assets/thumbnails/startup_t.png';
import mystery_T from '../assets/thumbnails/mw_t.jpg';
import cafe_T from '../assets/thumbnails/cafeight_t.png';
import rx7_T from '../assets/thumbnails/rx7_t.png';
import ingen_T from '../assets/thumbnails/ingen_t.png';
/*lowecase png*/
interface Project {
  id: number;
  file: string;
  title: string;
  description: string;
  img: string;
}

const Projects: React.FC = () => {
  const isSmallScreen = window.innerWidth < 800;
  // Dummy data for project cards
  const projects: Project[] = [
    { id: 13, file: 'controller-workflow', title: 'Controller Workflow', description: 'Blender', img:controller_T},
    { id: 12, file: 'the-lrxs', title: 'LRXS Main', description: 'React + Vite', img:lrxs_T},
    { id: 11, file: 'karzhyn-website', title: 'Karzhyn Website', description: 'Bootstrap', img:karzhyn_T},
    { id: 10, file: 'friends-list-website', title: 'Friends List Website', description: 'Vanilla HTML', img:friends_T},
    { id: 9, file: 'create-with-clint-double-memory', title: 'Memory', description: 'Blender', img:memory_T},
    { id: 8, file: 'caster-wheel', title: 'Caster Wheel', description: 'Blender', img:caster_T},
    { id: 7, file: 'salad-kitchen', title: 'Salad Kitchen', description: 'Blender', img:salad_T},
    { id: 6, file: 'king-tiger', title: 'King Tiger', description: 'Blender', img:king_T},
    { id: 5, file: 'start-up-themed-backgrounds', title: '"Start Up" Themed backgrounds', description: 'Blender', img:start_T},
    { id: 4, file: 'mystery-word', title: 'Mystery Word: Five Letters', description: 'Unity', img:mystery_T},
    { id: 3, file: 'cafeight', title: 'CafEight', description: 'Blender', img:cafe_T},
    { id: 2, file: 'rx7-fd', title: 'RX-7 Model', description: 'Blender', img:rx7_T},
    { id: 1, file: 'ingen', title: 'Ingen', description: 'Blender', img:ingen_T},
    // Add more projects as needed
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <Link className='link-component' key={project.id} to={`/lrxs-web/${project.file}`}>
          <div
            className="project-card"
            style={{
              animationDelay: `${isSmallScreen ? '0s' : index * 0.2 + 's'}`,
            }}
          >
            <div>
              <img src={project.img} alt="" />
            </div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
