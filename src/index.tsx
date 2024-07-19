import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, MouseEvent } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';

import {
	defaultArticleState,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';


const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {

	const [fontSelected, setFontSelected] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [fontSizeSelected, setFontSizeSelected] = useState(
		defaultArticleState.fontSizeOption
	);
	const [fontColorSelected, setFontColorSelected] = useState(
		defaultArticleState.fontColor
	);
	const [bgColorSelected, setBgColorSelected] = useState(
		defaultArticleState.backgroundColor
	);
	const [widthSelected, setWidthSelected] = useState(
		defaultArticleState.contentWidth
	);

	const [fontSelectedView, setFontSelectedView] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [fontSizeSelectedView, setFontSizeSelectedView] = useState(
		defaultArticleState.fontSizeOption
	);
	const [fontColorSelectedView, setFontColorSelectedView] = useState(
		defaultArticleState.fontColor
	);
	const [bgColorSelectedView, setBgColorSelectedView] = useState(
		defaultArticleState.backgroundColor
	);
	const [widthSelectedView, setWidthSelectedView] = useState(
		defaultArticleState.contentWidth
	);

	function translateState(
		evt: MouseEvent
	) {
		evt.preventDefault();
		setFontSelectedView(fontSelected);
		setFontSizeSelectedView(fontSizeSelected);
		setFontColorSelectedView(fontColorSelected);
		setBgColorSelectedView(bgColorSelected);
		setWidthSelectedView(widthSelected);
	}

	function restoreState() {
		setFontSelected(fontSelectedView);
		setFontSizeSelected(fontSizeSelectedView);
		setFontColorSelected(fontColorSelectedView);
		setBgColorSelected(bgColorSelectedView);
		setWidthSelected(widthSelectedView);
	}

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': fontSelectedView.value,
					'--font-size': fontSizeSelectedView.value,
					'--font-color': fontColorSelectedView.value,
					'--container-width': widthSelectedView.value,
					'--bg-color': bgColorSelectedView.value,
				} as CSSProperties
			}
			onClick={() => {
				// setIsOpen(false);
			}}>
			<ArticleParamsForm
				fontSelected={fontSelected}
				setFontSelected={setFontSelected}
				fontSizeSelected={fontSizeSelected}
				setFontSizeSelected={setFontSizeSelected}
				fontColorSelected={fontColorSelected}
				setFontColorSelected={setFontColorSelected}
				bgColorSelected={bgColorSelected}
				setBgColorSelected={setBgColorSelected}
				widthSelected={widthSelected}
				setWidthSelected={setWidthSelected}
				translateState={translateState}
				restoreState={restoreState}
				/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
