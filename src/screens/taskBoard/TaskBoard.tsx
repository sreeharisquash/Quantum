import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styles from "./TaskBoard.module.css";
import { taskBoardData } from "@/utils/mockData";
import CommonButton from "@/components/commonButton/CommonButton";

type ColumnKey = "inProgress" | "inReview" | "completed";

const initialTasks: Record<ColumnKey, any[]> = {
  inProgress: taskBoardData.slice(0, 2),
  inReview: taskBoardData.slice(2, 3),
  completed: taskBoardData.slice(3, 4),
};

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const onDragEnd = (result: DropResult) => {
    setIsDragging(false);
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceColumn = Array.from(tasks[source.droppableId as ColumnKey]);
    const destColumn = Array.from(tasks[destination.droppableId as ColumnKey]);
    const [movedTask] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      setTasks({
        ...tasks,
        inProgress: [
          ...tasks.inProgress,
          {
            id: Date.now(),
            title: newTaskTitle,
            image: "",
            task: "",
            bgClr: "",
            fontClr: "",
          },
        ],
      });
      setNewTaskTitle("");
    }
  };

  const handleDoubleClick = (taskId: number) => {
    console.log("Double-clicked on task with ID:", taskId);

    const taskElement = document.querySelector(
      `[data-rbd-draggable-id='${taskId}']`
    );

    if (taskElement) {
      const evt = new MouseEvent("mousedown", { bubbles: true });
      taskElement.dispatchEvent(evt);
    } else {
      console.log("Draggable element not found for task ID:", taskId);
    }
  };

  return (
    <div className={`${styles.taskBoard} p-7 rounded-lg`}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.board}>
          {Object.entries(tasks).map(([columnId, columnTasks]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <div
                  className={styles.column}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h3 className={styles.columnTitle}>
                    {columnId.replace(/([A-Z])/g, " $1").trim()}
                    <img src="/svg/optionsIcon.svg" alt="" />
                  </h3>
                  {columnTasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className={styles.task}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          onDoubleClick={() => handleDoubleClick(task.id)}
                        >
                          <div className="flex align-middle justify-between">
                            {task.task ? (
                              <span
                                style={{
                                  backgroundColor: task.bgClr,
                                  color: task.fontClr,
                                  paddingBlock: "5px",
                                  paddingInline: "9px",
                                  borderRadius: "6px",
                                }}
                              >
                                {task.task}
                              </span>
                            ) : (
                              <span
                                style={{
                                  backgroundColor: "white",
                                  color: "#1E7FFE",
                                  paddingBlock: "5px",
                                  paddingInline: "9px",
                                  borderRadius: "6px",
                                }}
                              >
                                Info
                              </span>
                            )}
                            <img src="/svg/optionsIcon.svg" alt="" />
                          </div>

                          <img
                            src={task.image}
                            alt=""
                            className="my-5 w-full"
                          />
                          <h6>{task.title}</h6>
                          <div className="flex my-2 justify-between">
                            <div className="flex align-middle gap-3">
                              <img
                                src="/svg/attachIcon.svg"
                                alt=""
                                className={styles.icon}
                              />
                              <img
                                src="/svg/commentIcon.svg"
                                alt=""
                                className={styles.icon}
                              />
                            </div>
                            <img src="/images/tutors.png" alt="" />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Add New Task</h3>
            <div className={styles.newTask}>
              <input
                type="text"
                placeholder="Task Title"
                className={styles.input}
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <CommonButton label="Add New Task" onClickFnctn={handleAddTask} />
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskBoard;
