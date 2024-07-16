import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { Button } from 'components/button';

import { backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import articleParamsStyles from './components/article-params-form/ArticleParamsForm.module.scss';

import { Select } from './components/select';
import { RadioGroup } from './components/radio-group';
import { Separator } from './components/separator';
import { Text } from './components/text';


const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [fontSelected, setFontSelected] = useState(defaultArticleState.fontFamilyOption);
	const [fontSizeSelected, setFontSizeSelected] = useState(defaultArticleState.fontSizeOption);
	const [fontColorSelected, setFontColorSelected] = useState(defaultArticleState.fontColor);
	const [bgColorSelected, setBgColorSelected] = useState(defaultArticleState.backgroundColor);
	const [widthSelected, setWidthSelected] = useState(defaultArticleState.contentWidth);

	const [fontSelectedView, setFontSelectedView] = useState(defaultArticleState.fontFamilyOption);
	const [fontSizeSelectedView, setFontSizeSelectedView] = useState(defaultArticleState.fontSizeOption);
	const [fontColorSelectedView, setFontColorSelectedView] = useState(defaultArticleState.fontColor);
	const [bgColorSelectedView, setBgColorSelectedView] = useState(defaultArticleState.backgroundColor);
	const [widthSelectedView, setWidthSelectedView] = useState(defaultArticleState.contentWidth);

	function translateState() {
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
			}>
			<ArticleParamsForm>
					<Text as="h2" weight={800} size={31} uppercase>задайте параметры</Text>

					<Select
							selected={fontSelected}
							onChange={setFontSelected}
							options={fontFamilyOptions}
							title='шрифт'
					></Select>

					<RadioGroup
						selected={fontSizeSelected}
						name='fontSize'
						onChange={setFontSizeSelected}
						options={fontSizeOptions}
						title='размер шрифта'
					></RadioGroup>

					<Select
						selected={fontColorSelected}
						onChange={setFontColorSelected}
						options={fontColors}
						title='цвет шрифта'
					></Select>

					<Separator />

					<Select
						selected={bgColorSelected}
						onChange={setBgColorSelected}
						options={backgroundColors}
						title='цвет фона'
					></Select>

					<Select
						selected={widthSelected}
						onChange={setWidthSelected}
						options={contentWidthArr}
						title='ширина контента'
					></Select>

					<div className={articleParamsStyles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={restoreState}/>
						<Button title='Применить' type={undefined} onClick={translateState}/>
					</div>

			</ArticleParamsForm>
			<Article/>
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
