FROM jupyter/base-notebook

#jupyter nbextension enable --py --sys-prefix widgetsnbextension
RUN pip install octave_kernel \
 && python -m octave_kernel.install \
 && conda install -y ipywidgets
