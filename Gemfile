source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.4'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
# gem 'rails', '~> 6.0.3', '>= 6.0.3.4'
gem 'rails', '>= 6.1', '< 8'

# Use sqlite3 as the database for Active Record
# gem 'sqlite3', '~> 1.4'
# Use Puma as the app server
gem 'puma', '~> 4.1'
# Use SCSS for stylesheets
gem 'sass-rails', '>= 6'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 4.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
# gem 'bootsnap', '>= 1.4.2', require: false
# gem 'bootsnap', '~> 1.16', require: false

group :development, :test do
  gem 'bootsnap', '>= 1.16', require: false
end


group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data'

gem 'pg', '~> 1.5', '>= 1.5.3'

gem 'devise_ldap_authenticatable'

gem 'tinymce-rails'

gem 'blacklight', ' ~> 7.0'
gem 'blacklight-spotlight', github: 'projectblacklight/spotlight', branch:'main'
# gem 'blacklight-spotlight', '~> 3.5', '>= 3.5.0.2'
# group :development, :test do
# end

group :development, :test do 
  gem 'dotenv', '~> 2.8', '>= 2.8.1'
end

gem 'solr_wrapper', '>= 0.3'
gem 'rsolr', '>= 1.0', '< 3'
gem 'bootstrap', '~> 4.0'
gem 'twitter-typeahead-rails', '0.11.1.pre.corejavascript'
gem 'jquery-rails'
gem 'devise'
gem 'devise-guests', '~> 0.6'
gem 'coffee-rails', '~> 4.2'
gem 'uglifier', '>= 1.3.0'
gem 'friendly_id'
gem 'sitemap_generator'
# gem 'blacklight-gallery', '~> 1.1'
gem 'blacklight-gallery', '~> 3.0'
# gem 'blacklight-oembed', '~> 1.0'
gem 'blacklight-oembed', '~> 1.1'
gem 'devise_invitable'
gem 'mimemagic', github: 'mimemagicrb/mimemagic', ref: '01f92d86d15d85cfd0f20dabd025dcbd36a8a60f'
