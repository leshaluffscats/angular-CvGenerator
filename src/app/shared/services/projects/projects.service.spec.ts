import { IProjectDto } from '../../interfaces/projects.interface';
import { ProjectsService } from './projects.service';

describe('project service', () => {
  const projectService: ProjectsService = new ProjectsService();
  let object: IProjectDto;

  beforeEach(
    () =>
      (object = {
        id: 1,
        projectName: 'Cvgen',
        description: 'Cv generator',
        startDate: '2023-12-31T00:00:00.000Z',
        endDate: '2023-12-31T00:00:00.000Z',
        techStack: [{ id: 1, name: 'Angular' }],
        responsibilities: [{ id: 2, name: 'Frontend' }],
        teamRoles: [{ id: 3, name: 'Developer' }],
        teamSize: 5,
      }),
  );

  it('should modify array of projects', () => {
    const projects: IProjectDto[] = [object];

    const modifiedProjects = projectService.modifyProjectsArr(projects);

    expect(modifiedProjects.length).toBe(projects.length);
    expect(modifiedProjects[0].startDate).toBeInstanceOf(Date);
    expect(modifiedProjects[0].endDate).toBeInstanceOf(Date);
    expect(modifiedProjects[0].techStack).toEqual(['Angular']);
    expect(modifiedProjects[0].responsibilities).toEqual(['Frontend']);
    expect(modifiedProjects[0].teamRoles).toEqual(['Developer']);
  });

  it("should modify project's object", () => {
    const modifiedObject = projectService.modifyProject(object);

    expect(modifiedObject.startDate).toBeInstanceOf(Date);
    expect(modifiedObject.endDate).toBeInstanceOf(Date);
    expect(modifiedObject.techStack).toEqual(['Angular']);
    expect(modifiedObject.responsibilities).toEqual(['Frontend']);
    expect(modifiedObject.teamRoles).toEqual(['Developer']);
  });
});
