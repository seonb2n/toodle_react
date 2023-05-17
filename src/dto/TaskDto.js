import ActionDto from "./ActionDto";

class TaskDto {
    taskId;
    content;
    importance;
    startAt;
    endAt;
    actionDtoSet;
    constructor({taskId, content, importance, startAt, endAt, actionDtoSet}) {
        this.taskId = taskId;
        this.content = content;
        this.importance = importance;
        this.startAt = startAt;
        this.endAt = endAt;
        this.actionDtoSet = []
        actionDtoSet.map(actionDto => (
            this.actionDtoSet.push(new ActionDto(actionDto))
        ))
    }
}

export default TaskDto;