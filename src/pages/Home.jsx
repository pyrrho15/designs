import Dropdown from '../components/Dropdown'
import Empty from '../components/Empty'
import Simple from '../components/Simple'
import Talking from '../components/Talking'
import Trail from '../components/Trail'
import Card from '../components/Card'
import Cube from '../components/Cube'
import FolderIcon from '../components/FolderIcon'
import Radar from '../components/Radar'
import Stack from '../components/Stack'
import FileCompo from '../components/FileCompo'
import Expense from '../components/Expense'

const designs = [
    { component: Simple, githubUrl: 'https://github.com/DarkkkSoul/designs/blob/main/src/components/Simple.jsx' },
    { component: Trail, githubUrl: 'https://github.com/DarkkkSoul/designs/blob/main/src/components/Trail.jsx' },
    { component: Talking, githubUrl: 'https://github.com/DarkkkSoul/designs/blob/main/src/components/Talking.jsx' },
    { component: Dropdown, githubUrl: 'https://github.com/DarkkkSoul/designs/blob/main/src/components/Dropdown.jsx' },
    { component: FolderIcon, githubUrl: 'https://github.com/DarkkkSoul/designs/blob/main/src/components/FolderIcon.jsx' },
    { component: Stack, githubUrl: 'https://github.com/DarkkkSoul/designs/blob/main/src/components/Stack.jsx' },
    // { component: Card, githubUrl: 'https://github.com/DarkkkSoul/designs/blob/main/src/components/Card.jsx' },
    { component: Radar, githubUrl: 'https://github.com/DarkkkSoul/designs/blob/main/src/components/Radar.jsx' },
    { component: Cube, githubUrl: 'https://github.com/DarkkkSoul/designs/blob/main/src/components/Cube.jsx' },
    { component: FileCompo, githubUrl: "https://github.com/DarkkkSoul/designs/blob/main/src/components/FileCompo.jsx" },
    { component: Expense, githubUrl: "https://github.com/DarkkkSoul/designs/blob/main/src/components/Expense.jsx" },
    { component: Empty, githubUrl: null },
    { component: Empty, githubUrl: null },
]

function Home() {
    return (
        <div className='bg-neutral-500/90 pb-0'>
            <h2 className='border-b border-white/60 text-white/90 font-serif uppercase text-3xl py-6 text-center'>Playground</h2>
            <div className='min-h-screen grid grid-cols-1 sm:grid-cols-6 grid-rows-[repeat(30,10rem)] divide-x divide-y divide-white/60'>
                {designs.map(({ component: Component, githubUrl }, i) => (
                    <Component key={i} githubUrl={githubUrl} />
                ))}
            </div>
        </div>
    )
}

export default Home
