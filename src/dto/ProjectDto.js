import TaskDto from "./TaskDto";

class ProjectDto {
    projectId;
    projectName;
    projectColor;
    taskDtoSet;

    constructor({projectId, projectName, projectColor, taskDtoSet}) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.projectColor = projectColor;
        this.taskDtoSet = [];
        taskDtoSet.map(taskDto => (
            this.taskDtoSet.push(new TaskDto(taskDto))
        ))
    }
}

export default ProjectDto;