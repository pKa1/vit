export type Category = 'residential' | 'commercial' | 'interior' | 'landscape';

export interface ProjectGalleryImage {
	src: string;
	alt: string;
}

export interface Project {
	slug: string;
	title: string;
	description: string;
	image: string;
	category: Category;
	/** Расширенное описание для страницы проекта */
	fullDescription?: string;
	/** Характеристики проекта */
	details?: {
		location?: string;
		area?: string;
		year?: string;
		style?: string;
		status?: string;
	};
	/** Галерея изображений */
	gallery?: ProjectGalleryImage[];
}

export const categories = [
	{ id: 'all' as const, label: 'Все' },
	{ id: 'residential' as const, label: 'Жилые дома' },
	{ id: 'commercial' as const, label: 'Коммерческие' },
	{ id: 'interior' as const, label: 'Интерьеры' },
	{ id: 'landscape' as const, label: 'Ландшафт' },
];

export const categoryLabels: Record<Category, string> = {
	residential: 'Жилые дома',
	commercial: 'Коммерческие',
	interior: 'Интерьеры',
	landscape: 'Ландшафт',
};

export const projects: Project[] = [
	// --- Жилые дома ---
	{
		slug: 'villa-millennium',
		title: 'Villa Millennium',
		description:
			'Второй свет, восьмиметровые потолки и панорамное остекление формируют в доме ощущение простора и яркой связи с природой.',
		fullDescription:
			'Загородная резиденция Villa Millennium — проект, в котором архитектура подчинена ландшафту. Второй свет высотой 8 метров заливает гостиную естественным светом, а панорамное остекление стирает границу между интерьером и садом. Фасад выполнен из натурального камня и термодерева, кровля — плоская с эксплуатируемой террасой.',
		image:
			'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'residential',
		details: {
			location: 'Московская область, Рублёво-Успенское шоссе',
			area: '650 м²',
			year: '2024',
			style: 'Современный минимализм',
			status: 'Завершён',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Фасад Villa Millennium' },
			{ src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Интерьер гостиной' },
			{ src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Кухня-столовая' },
			{ src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Вид с террасы' },
		],
	},
	{
		slug: 'residencia-parkovaya',
		title: 'Резиденция Парковая',
		description:
			'Минималистичный фасад из натурального камня, интегрированный ландшафт и скрытая инженерия — дом, который живёт в гармонии с участком.',
		fullDescription:
			'Резиденция Парковая расположена на лесном участке площадью 30 соток. Архитектура здания следует рельефу: цокольный этаж врезан в склон, а основной объём парит над землёй на колоннах. Все инженерные системы скрыты, ландшафтный дизайн интегрирован в проект с первого дня.',
		image:
			'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'residential',
		details: {
			location: 'Новая Рига, КП «Парковый»',
			area: '480 м²',
			year: '2023',
			style: 'Органическая архитектура',
			status: 'Завершён',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Фасад резиденции' },
			{ src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Вид сбоку' },
			{ src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Спальня' },
		],
	},
	{
		slug: 'chalet-lake',
		title: 'Шале у озера',
		description:
			'Комбинация дерева, стекла и металла. Открытая планировка первого этажа с выходом на террасу и собственный причал.',
		fullDescription:
			'Шале спроектировано для семьи, проводящей лето на берегу озера. Первый этаж — единое пространство гостиной, кухни и столовой с панорамными раздвижными окнами. Второй этаж — три спальни с балконами и вид на воду. Собственный причал и баня у берега.',
		image:
			'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'residential',
		details: {
			location: 'Карелия, озеро Сямозеро',
			area: '320 м²',
			year: '2024',
			style: 'Скандинавское шале',
			status: 'В процессе',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Фасад шале' },
			{ src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Терраса' },
		],
	},
	// --- Коммерческие ---
	{
		slug: 'urban-loft',
		title: 'Городской лофт',
		description:
			'Реконструкция промышленного здания в современное жилое пространство с сохранением исторических элементов фасада.',
		fullDescription:
			'Бывшая текстильная фабрика конца XIX века превращена в современный жилой комплекс. Кирпичные стены, чугунные колонны и высокие потолки сохранены как элементы дизайна. Новые инженерные системы интегрированы в открытые коммуникации в стиле industrial.',
		image:
			'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'commercial',
		details: {
			location: 'Москва, Красный Октябрь',
			area: '1 200 м²',
			year: '2023',
			style: 'Industrial / Лофт',
			status: 'Завершён',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Фасад лофта' },
			{ src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Внутренний двор' },
		],
	},
	{
		slug: 'bc-horizon',
		title: 'Бизнес-центр «Горизонт»',
		description:
			'Многоэтажный офисный комплекс с панорамным остеклением, подземной парковкой и энергоэффективными инженерными системами.',
		fullDescription:
			'12-этажный бизнес-центр класса А с фасадом из структурного остекления. Подземная парковка на 200 мест, атриум с зимним садом, конференц-зал на 150 человек. Здание сертифицировано по стандарту BREEAM Very Good.',
		image:
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'commercial',
		details: {
			location: 'Санкт-Петербург, Петроградская сторона',
			area: '18 000 м²',
			year: '2022',
			style: 'High-tech',
			status: 'Завершён',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Фасад БЦ' },
			{ src: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Атриум' },
		],
	},
	{
		slug: 'tc-promenade',
		title: 'Торговый центр «Променад»',
		description:
			'Открытая архитектура с атриумом, натуральные материалы отделки и продуманная навигация для посетителей.',
		fullDescription:
			'Торговый центр нового формата — без замкнутых коридоров. Центральный атриум высотой 4 этажа с естественным освещением, зоны отдыха с живыми растениями, фуд-холл на верхнем этаже с панорамной террасой.',
		image:
			'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'commercial',
		details: {
			location: 'Краснодар, ул. Красная',
			area: '25 000 м²',
			year: '2024',
			style: 'Современный коммерческий',
			status: 'В процессе',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Фасад ТЦ' },
		],
	},
	// --- Интерьеры ---
	{
		slug: 'villa-mediterranean',
		title: 'Вилла Средиземноморье',
		description:
			'Белоснежные стены, арочные проёмы и внутренний двор с бассейном — классика средиземноморской архитектуры в современном прочтении.',
		fullDescription:
			'Интерьер виллы вдохновлён архитектурой Санторини и побережья Амальфи. Белая штукатурка, террацо на полах, мебель из ротанга и тика. Внутренний двор с бассейном — центр композиции, вокруг которого организованы все помещения.',
		image:
			'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'interior',
		details: {
			location: 'Сочи, Красная Поляна',
			area: '420 м²',
			year: '2023',
			style: 'Средиземноморский',
			status: 'Завершён',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Гостиная' },
			{ src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Столовая' },
			{ src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Спальня' },
		],
	},
	{
		slug: 'penthouse-panorama',
		title: 'Пентхаус «Панорама»',
		description:
			'Двухуровневый интерьер с террасой на крыше, камином и открытой кухней-гостиной в стиле contemporary.',
		fullDescription:
			'Пентхаус на последних двух этажах жилого комплекса. Двойная высота гостиной, винтовая лестница из стали и дуба, камин с панорамным стеклом. Терраса на крыше с джакузи и зоной барбекю с видом на город.',
		image:
			'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'interior',
		details: {
			location: 'Москва, Пресненская набережная',
			area: '280 м²',
			year: '2024',
			style: 'Contemporary',
			status: 'Завершён',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Гостиная пентхауса' },
			{ src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Кухня' },
		],
	},
	{
		slug: 'minimalist-apartment',
		title: 'Квартира в стиле минимализм',
		description:
			'Лаконичные формы, скрытые системы хранения и мягкая цветовая палитра. Каждый элемент продуман до мелочей.',
		fullDescription:
			'Квартира площадью 120 м² для молодой пары. Концепция — максимум воздуха при минимуме предметов. Вся техника и хранение спрятаны за бесшовными фасадами. Цветовая палитра: белый, серый, натуральное дерево.',
		image:
			'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'interior',
		details: {
			location: 'Москва, Хамовники',
			area: '120 м²',
			year: '2024',
			style: 'Минимализм',
			status: 'Завершён',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Гостиная' },
			{ src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Кухня' },
		],
	},
	// --- Ландшафт ---
	{
		slug: 'eco-house',
		title: 'Эко-дом «Лесная поляна»',
		description:
			'Энергоэффективный дом с зелёной кровлей, солнечными панелями и системой рекуперации. Гармония технологий и природы.',
		fullDescription:
			'Дом спроектирован по принципам пассивного энергопотребления. Зелёная кровля с полевыми травами, солнечные панели 12 кВт, тепловой насос, рекуперация воздуха. Ландшафт участка — естественный лес с минимальным вмешательством.',
		image:
			'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'landscape',
		details: {
			location: 'Ленинградская область',
			area: '240 м² + участок 25 соток',
			year: '2023',
			style: 'Эко-архитектура',
			status: 'Завершён',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Вид сверху' },
			{ src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Сад' },
		],
	},
	{
		slug: 'zen-garden',
		title: 'Сад камней «Тишина»',
		description:
			'Японский сад с водными элементами, натуральным камнем и продуманной подсветкой для вечернего созерцания.',
		fullDescription:
			'Ландшафтный проект на участке 15 соток. Японский сад с прудом кои, мостиком из кедра, зоной сухого ручья и беседкой для чайной церемонии. Вечерняя подсветка создаёт атмосферу умиротворения.',
		image:
			'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'landscape',
		details: {
			location: 'Подмосковье, Истринский район',
			area: 'Участок 15 соток',
			year: '2024',
			style: 'Японский сад',
			status: 'В процессе',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Сад камней' },
			{ src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Пруд' },
		],
	},
	{
		slug: 'terrace-park',
		title: 'Террасный парк «Каскад»',
		description:
			'Многоуровневое озеленение с террасами, зонами отдыха и декоративным водопадом на склоне участка.',
		fullDescription:
			'Участок с перепадом высот 6 метров превращён в каскадный парк. Три уровня террас с подпорными стенками из натурального камня, декоративный водопад, зона для медитации на верхнем ярусе и детская площадка на нижнем.',
		image:
			'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&h=900&fit=crop&crop=entropy&auto=format&q=80',
		category: 'landscape',
		details: {
			location: 'Крым, Южный берег',
			area: 'Участок 40 соток',
			year: '2023',
			style: 'Средиземноморский ландшафт',
			status: 'Завершён',
		},
		gallery: [
			{ src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Террасы' },
			{ src: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1600&h=900&fit=crop&auto=format&q=80', alt: 'Водопад' },
		],
	},
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
