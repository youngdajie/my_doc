import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config : Config = {
	title: '小杰 说明书',
	tagline: '杂七杂八',
	favicon: 'img/favicon.ico',

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: 'https://doc.yangjie.site',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'xiaojie', // Usually your GitHub org/user name.
	projectName: 'xiaojie', // Usually your repo name.

	onBrokenLinks: 'throw',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'zh-Hans',
		locales: ['zh-Hans'],
	},
	plugins: [
		[
			'@easyops-cn/docusaurus-search-local',
			{
				// 插件选项（根据你的需求调整）
				indexDocs: true,
				indexBlog: false,
				language: ["zh", "en"],
				hashed: true,
				docsDir: ['docs'],
			},
		],
	],
	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					sidebarCollapsed: false, // 👈 关键：设为 false 表示默认展开
					editUrl:
						'https://github.com/youngdajie/my_doc/blob/main/',
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/youngdajie/my_doc/blob/main/',
					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],
	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		colorMode: {
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: '小杰说明书',
			logo: {
				alt: '小杰说明书',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: '文档导航',
				},
				// { to: '/blog', label: '杂文', position: 'left' },
				// {
				// 	href: 'https://github.com/youngdajie/my_doc',
				// 	label: 'GitHub',
				// 	position: 'right',
				// },
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: '站长',
					items: [
						{
							label: '小杰主页',
							to: 'https://www.yangjie.site',
						},
					],
				},
				{
					title: '相关链接',
					items: [
						{
							label: '时间屏保',
							href: 'https://clock.yangjie.site/',
						},
						{
							label: '原神启动',
							href: 'https://yuanshen.yangjie.site/',
						},
						{
							label: '资源下载',
							href: 'https://pan.yangjie.site/',
						},
					],
				},
				{
					title: '更多',
					items: [
						{
							label: 'Blog',
							to: 'https://box.yangjie.site',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/youngdajie/my_doc',
						},
					],
				},
			],
			// copyright: `Copyright © ${new Date().getFullYear()} 小杰`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;