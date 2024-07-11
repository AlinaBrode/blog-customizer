import clsx from 'clsx';

// Сообщаем вебпаку, что этот файл использует это изображение.
import plane from 'src/images/plane.png';
import { Text } from 'components/text';

import styles from './Article.module.scss';
import { FontFamiliesClasses, OptionType } from 'src/constants/articleProps';

interface ArticleProps {
	fontSelected: string
}

export const Article = ({fontSelected}: ArticleProps) => {
	return (
		<article className={clsx(styles.article)}>
			<Text as='h1' size={45} weight={800} uppercase dynamicLite family={fontSelected as FontFamiliesClasses}>
				Портрет Западной Швейцарии
			</Text>
			<div className={styles.titleDescription}>
				<Text size={22} weight={800} uppercase align='center' dynamicLite family={fontSelected as FontFamiliesClasses}>
					Примитивист Фиштр расписывает новый бюджетный авиалайнер
				</Text>
			</div>
			<img className={styles.image} src={plane} alt='Картинка самолета' />
			<Text dynamic size={18} fontStyle='italic' family={fontSelected as FontFamiliesClasses}>
				Фото: Hans-Peter Gauster , &quot;Bombardier CSeries CS300 HB-JCA&quot; ©
				2017 CC BY-SA 2.0
			</Text>
			<Text dynamic size={18} family={fontSelected as FontFamiliesClasses}>
				В конце 2016 года швейцарская авиакомпания Swiss получила свой первый
				канадский «Бомбардье CS300» для полётов малой и средней дальности. Чтобы
				придать новой 145-местной машине неповторимую индивидуальность, ливрею
				заказали живописцу. При условии, что эскиз он выполнит в одиночку и
				лично поправит роспись, когда её будут наносить на фюзеляж.
			</Text>
			<Text dynamic size={18} family={fontSelected as FontFamiliesClasses}>
				Выбор пал на примитивиста Матиаса Форбаша, работающего под псевдонимом
				Фиштр. Ему поставили задачу изобразить всё лучшее во франкоговорящей
				части Швейцарии — горы, озёра, вина, сыры, доброжелательность и свободу.
				Заказ был выполнен в рекордный срок, всего за 5 месяцев. Самолёт
				получился похожим на самого художника: такой же добродушный и с улыбкой
				до ушей.
			</Text>
			<Text dynamic size={18}>
				С мая 2017 года &quot;Бомбардье&quot; носит имя &quot;Швейцарская
				Романдия&quot; и регистрационный номер HB-JCA ; совершает в среднем 4
				коммерческих полёта в сутки. Его можно видеть в &quot;Домодедово&quot;,
				а также в аэропортах Парижа, Валенсии, Кракова, Берлина, Вены, Загреба,
				на на Майорке, Крите и Сицилии. Самолёт останется в той же ливрее, пока
				его купит другая авиакомпания.
			</Text>
		</article>
	);
};
