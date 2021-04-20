"Transparent background
autocmd vimenter * hi Normal guibg=NONE ctermbg=NONE
set termguicolors

"Turns off vi compatibility
set nocompatible

"Disables special character rendering at end of line
"set nolist

"Allows buffers to be hidden without being saved
"set hidden

"Disables backup files (Preferable for Coc)
"set nobackup
"set nowritenbackup

"Enables line numbers
set number
set number relativenumber
set numberwidth=1

"Accessing the system clipboard
set clipboard=unnamed

"Sets encoding to UTF-8
set encoding=UTF-8

"Enables the line that shows cursor position
set cursorline

"Enables syntax highlightting
syntax on

"Sets tab legth to 4
set tabstop=4

"Enables automatic identation whitin code
set autoindent

"Convert tabs into 2 spaces
set expandtab
set softtabstop=2

"Enables mouse support
set mouse=a

"Command auto complete menu
set wildmenu
set wildmode=full

"Other sets
set showcmd
set ruler
set showmatch

"nVim Plug auto installer
if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
 autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif


"Vim Plug plugin manager
call plug#begin('~/vim/plugged')

"Themes, color, etc
"Dracula colorscheme
Plug 'dracula/vim', { 'as': 'dracula' }
"Icons
Plug 'ryanoasis/vim-devicons'



"IDE
"Polyglot syntax plugin
Plug 'sheerun/vim-polyglot'
"Easymotion search plugin
Plug 'easymotion/vim-easymotion'
"Nerd Tree File Manager
Plug 'scrooloose/nerdtree'
"Autopairs
Plug 'jiangmiao/auto-pairs'
"Rainbow Brackets Color Plugin
Plug 'luochen1990/rainbow'
"Lightline Status Bar Plugin
Plug 'itchyny/lightline.vim'
"Indent Lines Indicators
Plug 'yggdroot/indentline'
"Distraction Free Mode Plugin
Plug 'junegunn/goyo.vim'
"VSCode Autocomplete
Plug 'neoclide/coc.nvim', {'branch': 'release'}
"Vim Tmux Navigator
Plug 'christoomey/vim-tmux-navigator'
"Auto CloseTag
Plug 'alvan/vim-closetag'
"Git 
Plug 'tpope/vim-fugitive'

call plug#end()



"Sets leader key
let mapleader=" "
"Custom shortcuts
nmap <Leader>w :w<CR>
nmap <Leader>q :q<CR>


"Sets colorscheme
colorscheme dracula

"Easymotion plugin
nmap <Leader>s <Plug>(easymotion-s2)

"Needed to get Lightline Status Bar
set laststatus=2
set noshowmode

"Sets Lightline Colorscheme
let g:lightline = {
    \ 'active': {
    \ 'left': [['mode', 'paste'], [], ['relativepath', 'modified']],
    \ 'right': [['kitestatus'], ['filetype', 'percent', 'lineinfo'], ['gitbranch']]
    \},
    \ 'inactive': {
    \   'left': [['inactive'], ['relativepath']],
    \   'right': [['bufnum']]
    \},
    \ 'component': {
    \   'bufnum': '%n',
    \   'inactive': 'inactive'
    \},
    \ 'component_function': {
    \   'gitbranch': 'fugitive#head',
    \   'kitestatus': 'kite#statusline'
    \},
    \ 'colorscheme': 'dracula',
    \ 'subseparator': {
    \   'left': '',
    \   'right': ''
    \ }
    \}

"Enable Rainbow Brackets
let g:rainbow_active = 1

"NerdTree Stuff
nmap <Leader>nt :NERDTreeFind<CR>
let NERDTreeQuitOnOpen=1
let NerdTreeShowLineNumbers=1
let NerdTreeDirArrows=1
let NerdTreeMinimalUI=1

"Goyo (Relax Mode) Toggle
map <Leader>gy :Goyo<CR>

"Disable Enter Functionality Of Auto Pairs
let g:AutoPairsMapCR = 0

"Identline stuff
map <Leader>le :IndentLinesEnable<CR>
map <leader>ld :IndentLinesDisable<CR>

"Auto closetag 
"HTML, JSX
let g:closetag_filenames = '*.html,*.js,*.jsx,*.ts,*.tsx'

"COC
"Stuff
autocmd FileType javascript let b:coc_suggest_disable = 1
autocmd FileType python let b:coc_suggest_disable = 1
autocmd FileType ruby let b:coc_suggest_disable = 1
autocmd FileType html let b:coc_suggest_disable = 1
autocmd FileType css let b:coc_suggest_disable = 1
autocmd FileType typescript let b:coc_suggest_disable = 1
autocmd FileType c++ let b:coc_suggest_disable = 1
autocmd FileType scss setl iskeyword+=@-@
"Remap keys for gotos
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)

"kite
let g:kite_supported_languages = ['javascript', 'python', 'ruby', 'html', 'css', 'typescript', 'cpp']

"Git stuff
nnoremap <Leader>G :G<CR>
nnoremap <Leader>gp :Gpush<CR>
nnoremap <Leader>gl :Gpull<CR>

"Use <c-space> to trigger completition.
if &filetype == "javascript" || &filetype == "python" || &filetype == "html" || &filetype == "css" || &filetype == "ruby" || &filetype == "typescript" || &filetype "cpp"
    inoremap <c-space> <C-x><C-u>
else
    inoremap <silent><expr> <c-space> coc#refresh()
endif

