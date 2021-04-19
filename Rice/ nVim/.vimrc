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
    \ 'colorscheme': 'dracula',
    \}

"Enable Rainbow Brackets
let g:rainbow_active = 1

"NerdTree Stuff
nmap <Leader>nt :NERDTreeFind<CR>
let NERDTreeQuitOnOpen=1

"Goyo (Relax Mode) Toggle
map <Leader>gy :Goyo<CR>

"Disable Enter Functionality Of Auto Pairs
let g:AutoPairsMapCR = 0

"Identline stuff
map <Leader>le :IndentLinesEnable<CR>
map <leader>ld :IndentLinesDisable<CR>

