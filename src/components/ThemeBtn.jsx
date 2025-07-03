import useTheme from '../contexts/theme'

export default function ThemeBtn() {
	const { themeMode, lightMode, darkMode } = useTheme()

	const onChangeBtn = e => {
		const darkModeStatus = e.currentTarget.checked
		if (darkModeStatus) {
			darkMode()
		} else {
			lightMode()
		}
	}

	return (
		<label className='fixed right-3 top-4 inline-flex items-center cursor-pointer z-[1100]'>
			<input
				type='checkbox'
				value=''
				className='sr-only peer'
				onChange={onChangeBtn}
				checked={themeMode === 'dark'}
			/>
			<div className="w-11 h-6 bg-gray-200 rounded-full border-2 border-black dark:border-white peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 duration-300 ease-in-out"></div>
			<span className='ml-3 text-sm font-medium text-gray-900 dark:text-white duration-300 ease-in-out'>
				Toggle Theme
			</span>
		</label>
	)
}
