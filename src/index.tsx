import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, MouseEvent, FormEvent } from 'react';
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

	const [fontSelectedTune, setFontSelectedTune] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [fontSizeSelectedTune, setFontSizeSelectedTune] = useState(
		defaultArticleState.fontSizeOption
	);
	const [fontColorSelectedTune, setFontColorSelectedTune] = useState(
		defaultArticleState.fontColor
	);
	const [bgColorSelectedTune, setBgColorSelectedTune] = useState(
		defaultArticleState.backgroundColor
	);
	const [widthSelectedTune, setWidthSelectedTune] = useState(
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


	const [fontSelectedMemo, setFontSelectedMemo] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [fontSizeSelectedMemo, setFontSizeSelectedMemo] = useState(
		defaultArticleState.fontSizeOption
	);
	const [fontColorSelectedMemo, setFontColorSelectedMemo] = useState(
		defaultArticleState.fontColor
	);
	const [bgColorSelectedMemo, setBgColorSelectedMemo] = useState(
		defaultArticleState.backgroundColor
	);
	const [widthSelectedMemo, setWidthSelectedMemo] = useState(
		defaultArticleState.contentWidth
	);



	function translateState(
		evt: FormEvent
	) {
		evt.preventDefault();
		setFontSelectedView(fontSelectedTune);
		setFontSizeSelectedView(fontSizeSelectedTune);
		setFontColorSelectedView(fontColorSelectedTune);
		setBgColorSelectedView(bgColorSelectedTune);
		setWidthSelectedView(widthSelectedTune);
	}

	function restoreState() {
		setFontSelectedView(fontSelectedMemo);
		setFontSizeSelectedView(fontSizeSelectedMemo);
		setFontColorSelectedView(fontColorSelectedMemo);
		setBgColorSelectedView(bgColorSelectedMemo);
		setWidthSelectedView(widthSelectedMemo);

		setFontSelectedTune(fontSelectedMemo);
		setFontSizeSelectedTune(fontSizeSelectedMemo);
		setFontColorSelectedTune(fontColorSelectedMemo);
		setBgColorSelectedTune(bgColorSelectedMemo);
		setWidthSelectedTune(widthSelectedMemo);
	}

	function memorizeState() {
		setFontSelectedMemo(fontSelectedView);
		setFontSizeSelectedMemo(fontSizeSelectedView);
		setFontColorSelectedMemo(fontColorSelectedView);
		setBgColorSelectedMemo(bgColorSelectedView);
		setWidthSelectedMemo(widthSelectedView);
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
		>
			<ArticleParamsForm
				fontSelected={fontSelectedTune}
				setFontSelected={setFontSelectedTune}
				fontSizeSelected={fontSizeSelectedTune}
				setFontSizeSelected={setFontSizeSelectedTune}
				fontColorSelected={fontColorSelectedTune}
				setFontColorSelected={setFontColorSelectedTune}
				bgColorSelected={bgColorSelectedTune}
				setBgColorSelected={setBgColorSelectedTune}
				widthSelected={widthSelectedTune}
				setWidthSelected={setWidthSelectedTune}
				translateState={translateState}
				restoreState={restoreState}
				memorizeState={memorizeState}
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
