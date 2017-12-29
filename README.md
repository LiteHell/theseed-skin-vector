# theseed-skin-vector
theseed-skin-vector is Ported version of [Mediawiki Vector skin](https://www.mediawiki.org/wiki/Skin:Vector).
Please note that some files are imported from [mediawiki repo](https://phabricator.wikimedia.org/source/mediawiki/browse/master/) and [Wikimedia UI base](https://phabricator.wikimedia.org/source/wikimedia-ui-base/repository/master/) repo.

# Build
Before you use, install less globally, and then run this command.
```
lessc ./less/screen.less ./static/css/layout.css
```

# Wiki logo
replace `static/images/wiki-logo.svg`
if you don't have svg file, edit `less/screen.less` to use bitmap logo

# License
This skin is a fork of Vector skin, so this skin is distributed under GPL 3.0 or later. For more information, see COPYING file.
