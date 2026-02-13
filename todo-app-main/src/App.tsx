import BackgroundImagePhoneLight from './assets/images/bg-mobile-light.jpg';
import BackgroundImageDesktopLight from './assets/images/bg-desktop-light.jpg';
import BackgroundImagePhoneDark from './assets/images/bg-mobile-dark.jpg';
import BackgroundImageDesktopDark from './assets/images/bg-desktop-dark.jpg';
import Heading from './components/ui/heading';
import Input from './components/ui/input';
import { useState } from 'react';
import TodoList from './components/todo-list';
import UseTodos from './hook/useTodos';
import useDarkMode from './hook/useDarkMode';

function App() {
    const { createNewTodo } = UseTodos();
    const { isDarkMode } = useDarkMode();
    const [newTodo, setNewTodo] = useState('');

    const changeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const name = newTodo.trim();
        if (!name) return;

        createNewTodo(name);
        setNewTodo('');
    };

    return (
        <main className="relative flex justify-center px-6 pt-12">
            <picture>
                <source
                    srcSet={
                        isDarkMode
                            ? BackgroundImageDesktopDark
                            : BackgroundImageDesktopLight
                    }
                    media="(min-width: 768px)"
                />
                <img
                    src={
                        isDarkMode
                            ? BackgroundImagePhoneDark
                            : BackgroundImagePhoneLight
                    }
                    alt="background image"
                    className="absolute inset-0 -z-10 w-full h-50 md:h-75 object-cover object-top opacity-75"
                />
            </picture>
            <div className="w-full max-w-135 space-y-10">
                <Heading />
                <article className="space-y-6">
                    <form onSubmit={handleSubmitTodo}>
                        <Input value={newTodo} onChange={changeNewTodo} />
                    </form>
                    <TodoList />
                </article>
            </div>
        </main>
    );
}

export default App;
