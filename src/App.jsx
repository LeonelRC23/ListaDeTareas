import './App.css';
import CardCustom from './components/CardCustom';
import { useTask } from './hook/useGetTask';

function App() {
  const { task, setTasks, deleteElement } = useTask();

  if (!task) {
    return <h1>Cargando</h1>;
  }

  return (
    <>
      <CardCustom
        task={task}
        setTasks={setTasks}
        deleteElement={deleteElement}
      />
    </>
  );
}

export default App;
