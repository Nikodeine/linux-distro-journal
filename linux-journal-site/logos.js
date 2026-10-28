// Default brand artwork. Custom images imported by the journal always take precedence.
// Remote assets require internet access; a secondary source is tried on image error.
const BRAND_LOGOS = {
'NixOS':['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nixos/nixos-original.svg','https://nixos.org/favicon.png'],
'Arch Linux':['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg','https://archlinux.org/static/logos/archlinux-icon-crystal-64.svg'],
'Debian':['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original.svg','https://www.debian.org/logos/openlogo-nd.svg'],
'Fedora KDE':['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fedora/fedora-original.svg','https://fedoraproject.org/favicon.ico'],
'CachyOS':['https://commons.wikimedia.org/wiki/Special:Redirect/file/CachyOS_Logo.svg','https://cachyos.org/favicon.ico'],
'Linux Mint':['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linuxmint/linuxmint-original.svg','https://linuxmint.com/favicon.ico'],
'Pop!_OS':['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/popos/popos-original.svg','https://pop.system76.com/favicon.ico'],
'Zorin OS':['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zorin/zorin-original.svg','https://zorin.com/favicon.ico'],
'Bazzite':['https://raw.githubusercontent.com/ublue-os/bazzite/main/press_kit/Bazzite_Color.svg','https://commons.wikimedia.org/wiki/Special:Redirect/file/Bazzite_Logo.svg'],
'PikaOS':['https://pika-os.com/favicon.ico','https://www.pika-os.com/favicon.ico'],
'Omarchy':['https://omarchy.org/favicon.ico','https://raw.githubusercontent.com/basecamp/omarchy/master/icon.png'],
'Nobara':['https://nobaraproject.org/img/nobara-icon.png','https://nobaraproject.org/favicon.ico'],
'openSUSE Tumbleweed':['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opensuse/opensuse-original.svg','https://www.opensuse.org/favicon.ico'],
'Void Linux':['https://commons.wikimedia.org/wiki/Special:Redirect/file/Void_Linux_logo.svg','https://voidlinux.org/assets/img/void_bg.png'],
'Gentoo':['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gentoo/gentoo-original.svg','https://www.gentoo.org/favicon.ico'],
'Solus':['https://commons.wikimedia.org/wiki/Special:Redirect/file/Solus.svg','https://getsol.us/favicon.ico'],
'Alpine Linux':['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinelinux/alpinelinux-original.svg','https://alpinelinux.org/favicon.ico'],
'Vanilla OS':['https://vanillaos.org/favicon.ico','https://github.com/Vanilla-OS/vanilla-os.github.io/raw/main/public/favicon.ico'],
'Slackware':['https://commons.wikimedia.org/wiki/Special:Redirect/file/Slackware_logo.svg','https://www.slackware.com/favicon.ico'],
'Chimera Linux':['https://commons.wikimedia.org/wiki/Special:Redirect/file/Chimera_Linux_logo.svg','https://chimera-linux.org/favicon.ico'],
'GNU Guix System':['https://guix.gnu.org/static/base/img/GuixSD.png','https://guix.gnu.org/favicon.ico'],
'KaOS':['https://kaosx.us/favicon.ico','https://commons.wikimedia.org/wiki/Special:Redirect/file/KaOS_logo.svg'],
'Artix Linux':['https://commons.wikimedia.org/wiki/Special:Redirect/file/Artix_Linux_logo.svg','https://artixlinux.org/favicon.ico']
};
function logoFallback(img){const sources=JSON.parse(img.dataset.sources||'[]');const next=Number(img.dataset.index||0)+1;if(next<sources.length){img.dataset.index=String(next);img.src=sources[next]}else{img.onerror=null;img.style.display='none';img.parentElement.classList.add('unavailable');img.parentElement.title='Logo source unavailable — use Add original logo to embed an image.'}}
