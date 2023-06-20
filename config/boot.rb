ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __dir__)

require 'bundler/setup' # Set up gems listed in the Gemfile.
# require 'bootsnap/setup' # Speed up boot time by caching expensive operations.
# require 'bootsnap/setup' if Rails.env.development?
require 'bootsnap/setup' if ENV['RAILS_ENV'] != 'build'
require 'rails/all'

