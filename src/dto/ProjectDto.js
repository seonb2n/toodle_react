import TaskDto from "./TaskDto";

class ProjectDto {
    projectId;
    projectName;
    taskDtoSet;

    constructor({projectId, projectName, taskDtoSet}) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.taskDtoSet = [];
        taskDtoSet.map(taskDto => (
            this.taskDtoSet.push(new TaskDto(taskDto))
        ))
    }
}

export default ProjectDto;