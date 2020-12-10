#!/bin/bash

postcss --config $npm_package_directories_config/postcss.json $npm_package_directories_build_public/css/*.css -d $npm_package_directories_build_public/css/