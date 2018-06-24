FROM jupyter/base-notebook

#jupyter nbextension enable --py --sys-prefix widgetsnbextension
RUN pip install octave_kernel
