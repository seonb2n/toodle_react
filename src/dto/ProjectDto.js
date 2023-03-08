import TaskDto from "./TaskDto";

class ProjectDto {
    projectId;
    projectName;
    taskDtoSet;

    constructor(data) {
        this.projectId = data.projectId;
        this.projectName = data.projectName;
        this.taskDtoSet = [];
        data.taskDtoSet.map(taskDto => (
            this.taskDtoSet.push(new TaskDto(taskDto))
        ))
    }
}

export default ProjectDto;